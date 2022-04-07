import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../assets/icons/home.png";
import HomeIconActive from "../assets/icons/home-active.png";
import ProjectIcon from "../assets/icons/project.png";
import ProjectIconActive from "../assets/icons/project-active.png";
import ChatIcon from "../assets/icons/chat.png";
import ChatIconActive from "../assets/icons/chat-active.png";
import ProfileIcon from "../assets/icons/profile.png";
import ProfileIconActive from "../assets/icons/profile-active.png";
import Home from "../screens/Home";
import Projects from "../screens/Projects";
import Chat from "../screens/Chat";

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
        <Tab.Screen key={index} name={item.screen} component={item.component} options={} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;

const theme = StyleSheet.create({
  container: {
    height: 85,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 30,
    shadowColor: "#0961F5",
  },
});
