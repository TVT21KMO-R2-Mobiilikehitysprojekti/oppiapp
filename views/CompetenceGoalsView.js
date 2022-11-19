import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { COMPETENCE_DATA, ICONS, THEME, NUMERIC } from '../data/data'

const SCREEN_PADDING = 10
const INDICATOR_SIZE = 110

/**
 * Back button
 */
const CustomButton = ( { onPress, imgSource } ) => {
  return (
    <TouchableOpacity
      style={ styles.customButton }
      activeOpacity={ NUMERIC.opacityTouchFade }
      onPress={ onPress }
    >
      <Image
        style={ styles.customButtonImg }
        source={ imgSource }
        resizeMode='contain'
      />
    </TouchableOpacity>
  )
}

/**
 * Candy like buttons CompetenceGoalsView
 */
const CompetenceIndicator = ( { top, left, item, allCompleted, onPress } ) => {
  const imgSource = allCompleted ? ICONS[ 'candyGreen' ] : ICONS[ 'candyBlue' ];
  return (
    <TouchableOpacity
      style={ [ styles.button, { top: top, left: left } ] }
      activeOpacity={ NUMERIC.opacityTouchFade }
      onPress={ onPress }
    >
      <Image
        style={ styles.buttonImage }
        source={ imgSource }
        resizeMode='contain'
      />
      <Text style={ styles.buttonText }>{ item.buttonText }</Text>
    </TouchableOpacity>
  )
}

/**
 * 
 */
const CompetenceDetailsCheckbox = ( { index, taskName, checked, handleCompleted } ) => {
  const imgSource = checked ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];

  const handleButtonPress = ( index ) => {
    handleCompleted( index )
  }

  return (
    <TouchableOpacity
      onPress={ () => handleButtonPress( index ) }
      style={ styles.checkTaskContainer }
      activeOpacity={ NUMERIC.opacityTouchFade }
    >
      <Image style={ styles.checkTaskImg } source={ imgSource } />
      <Text style={ styles.checkTaskText }>{ taskName }</Text>
    </TouchableOpacity>
  )
}

/**
 * 
 */
const CompetenceDetails = ( { item, tasksCompleted, handleTaskStatusChange } ) => {

  const handleCompleted = ( index ) => {
    let newArray = [ ...tasksCompleted ]
    newArray[ index ] = !newArray[ index ]
    handleTaskStatusChange( newArray )
  }

  return (
    <View>
      <Text style={ styles.title }>{ item.detailsTitle }</Text>
      <Text style={ styles.detailsDescription }>{ item.description }</Text>
      { item.tasks.map( ( task, index ) => <CompetenceDetailsCheckbox
        key={ index }
        index={ index }
        taskName={ task.title }
        checked={ tasksCompleted[ index ] }
        handleCompleted={ handleCompleted }
      /> ) }
    </View>
  )
}

// Create tasklist corresponding to competence data size
const competenceUserData = COMPETENCE_DATA.map( ( item ) => {
  const tasklistLength = item.tasks.length
  let taskCompletedArray = []
  for ( let index = 0; index < tasklistLength; index++ ) {
    taskCompletedArray.push( false )
  }
  return {
    taskCompleted: taskCompletedArray
  }
} )


/**
 * Returns absolute top/left values to group of elements in circular formation respect to parent element
 * 
 * @param {number} noOfElements Number of elements to draw total (included center element)
 * @param {number} radius Circumference elements distance to center
 * @param {number} startAngle Angle where first element is drawn
 * @param {number} centerX Group center point X
 * @param {number} centerY Group center point Y
 * @param {number} elementSize Diameter of single element
 * @returns Array of objects with x and y for location
 */
const calcElementPositions = (
  noOfElements,
  radius,
  startAngle,
  centerX,
  centerY,
  elementSize
) => {

  // Calculate angle between two radial elements and convert to rad
  const angleSliceRad = 360 / ( noOfElements - 1 ) / ( 180 / Math.PI )

  // Convert start angle to rad
  const startAngleRad = startAngle / ( 180 / Math.PI )

  // First (center) element is in given center location according to elementSize
  const x0 = Math.round( centerX - elementSize / 2 )
  const y0 = Math.round( centerY - elementSize / 2 )
  let elementPositions = [
    {
      left: x0,
      top: y0
    }
  ]

  // Calculate rest of the elements in the radial circle
  for ( let i = 1; i <= noOfElements; i++ ) {
    let newPos = {
      left: Math.round( x0 + radius * Math.cos( startAngleRad + ( i - 1 ) * angleSliceRad ) ),
      top: Math.round( y0 + radius * Math.sin( startAngleRad + ( i - 1 ) * angleSliceRad ) )
    }
    elementPositions.push( newPos )
  }
  return elementPositions
}

/**
 * View for students competence checklist
 */
const CompetenceGoalsView = () => {
  const [ tasksCompleted, setTasksCompleted ] = useState( competenceUserData )
  const [ showDetailsFrom, setShowDetailsFrom ] = useState( null )

  // Calc competence indicator locations
  const elementPositions = calcElementPositions(
    8,
    INDICATOR_SIZE * 1.2,
    270,
    Dimensions.get( 'window' ).width / 2 - SCREEN_PADDING,
    Dimensions.get( 'window' ).height / 2 - INDICATOR_SIZE,
    INDICATOR_SIZE
  )

  // Handle button presses for competence indicators
  const handleButtonPress = ( index ) => {
    setShowDetailsFrom( index )
  }

  // Update completed tasks to state
  const handleTaskStatusChange = ( taskArray ) => {
    let newTasksCompleted = [ ...tasksCompleted ]
    newTasksCompleted[ showDetailsFrom ].taskCompleted = taskArray
    setTasksCompleted( newTasksCompleted )
  }

  // Show general view when showDetailsFrom is null
  if ( showDetailsFrom === null ) {
    return (
      <View style={ styles.viewContainer }>
        <Text style={ styles.title }>Oppiäppi: Minä osaan</Text>
        <View style={ styles.buttonContainer }>
          { COMPETENCE_DATA.map( ( item, index ) => <CompetenceIndicator
            key={ index }
            top={ elementPositions[ index ].top }
            left={ elementPositions[ index ].left }
            item={ item }
            allCompleted={ tasksCompleted[ index ].taskCompleted.every(task => task === true) }
            onPress={ () => handleButtonPress( index ) } /> ) }
        </View>
      </View>
    )
  }
  // Show details view when details are selected
  else {
    return (
      <ScrollView style={ styles.scrollView }>
        <View style={ styles.detailsContainer }>
          <CustomButton
            onPress={ () => setShowDetailsFrom( null ) }
            imgSource={ ICONS[ 'backArrow' ] }
          />
          <CompetenceDetails
            item={ COMPETENCE_DATA[ showDetailsFrom ] }
            tasksCompleted={ tasksCompleted[ showDetailsFrom ].taskCompleted }
            handleTaskStatusChange={ handleTaskStatusChange }
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  viewContainer: {
    backgroundColor: THEME.lightBackground,
    position: 'relative',
    flexGrow: 1,
    padding: SCREEN_PADDING,
  },
  scrollView: {
    // flex: 1,
    // height: '100%',
  },
  detailsContainer: {
    borderWidth: 1,
    backgroundColor: THEME.lightBackground,
    // justifyContent: 'flex-start',
    // flexGrow: 1,
    padding: 10,
    // height: '100%'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    fontWeight: 'bold',
    height: INDICATOR_SIZE,
    width: INDICATOR_SIZE,
    justifyContent: 'center',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    position: 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkTaskContainer: {
    backgroundColor: THEME.lightGray,
    borderRadius: 20,
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },
  checkTaskImg: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  checkTaskText: {
    width: '85%',
  },
  customButton: {
    alignItems: 'center',
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    marginBottom: 10,
    width: 40,
  },
  customButtonImg: {
    width: '100%',
    height: '100%',
  },
  detailsDescription: {
    marginBottom: 10,
  }
} )

export default CompetenceGoalsView