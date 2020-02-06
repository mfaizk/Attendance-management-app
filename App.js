import {createAppContainer} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import Home from './Screens/Home'
import AddDetail from './Screens/AddDetail'
import infoScreen from './Screens/infoScreen'
import EditScreen from './Screens/EditScreen'
import MainDataEditLIst from './Screens/MainDataEditLIst'
const MainNavigator = createStackNavigator(
  {
  Home:{screen:Home},
  AddDetail:{screen:AddDetail},
  infoScreen:{screen:infoScreen},
  EditScreen:{screen:EditScreen},
  MainDataEditLIst:{screen:MainDataEditLIst}

  },{
  defaultNavigationOption:{
    headerTintColor:'#fff',
    headerStyle:{ 
      backgroundColor:'#b83227'

    },
     headerTitleStyle:{
       color:'#fff'
     }
  }
}
)
  
const App = createAppContainer(MainNavigator)
export default App