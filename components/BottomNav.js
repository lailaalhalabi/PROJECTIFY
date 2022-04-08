import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import ChatIconActive from "../assets/icons/chat-active.png";
import ChatIcon from "../assets/icons/chat.png";
import HomeIconActive from "../assets/icons/home-active.png";
import HomeIcon from "../assets/icons/home.png";
import ProfileIconActive from "../assets/icons/profile-active.png";
import ProfileIcon from "../assets/icons/profile.png";
import ProjectIconActive from "../assets/icons/project-active.png";
import ProjectIcon from "../assets/icons/project.png";
import { globalTheme } from "../components/globalTheme";
import Chat from "../screens/Chat";
import Home from "../screens/Home";
import Projects from "../screens/Projects";

const tabItems = [
  {
    screen: "Home",
    activeIcon: HomeIconActive,
    inactiveIcon: HomeIcon,
    component: Home,
  },
  {
    screen: "Project",
    activeIcon: ProjectIconActive,
    inactiveIcon: ProjectIcon,
    component: Projects,
  },
  {
    screen: "Chat",
    activeIcon: ChatIconActive,
    inactiveIcon: ChatIcon,
    component: Chat,
  },
  {
    screen: "Profile",
    activeIcon: ProfileIconActive,
    inactiveIcon: ProfileIcon,
    component: Chat,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={focused ? theme.tabButtonActive : theme.tabButton}
    >
      <Image source={focused ? item.activeIcon : item.inactiveIcon} />
    </TouchableOpacity>
  );
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: theme.container,
      }}
    >
      {tabItems.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.screen}
          component={item.component}
          options={{
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;

const theme = StyleSheet.create({
  container: {
    height: 95,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.1,
    marginTop: 3,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    marginHorizontal: 25,
  },
  tabButtonActive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    marginHorizontal: 25,
    borderTopWidth: 5,
    borderTopColor: globalTheme.colors.primary,
  },
});
