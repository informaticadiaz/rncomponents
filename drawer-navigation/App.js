import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/user.jpg";
import Contacto from "./screens/Contacto";
import Peron from "./screens/Peron";
import Noticas from "./screens/Noticias";
import Home from "./screens/Home";
import Evita from "./screens/Evita";
import Calendario from "./screens/Calendario";
import Verdades from "./screens/Verdades";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Filosofia Peronista</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  ></Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Calendario"
          options={{
            drawerLabel: "Calendario",
            title: "Calendario",
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="#808080" />
            )
          }}
          component={Calendario}
        />
        <Drawer.Screen
          name="Verdades"
          options={{
            drawerLabel: "Verdades",
            title: "Verdades",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={Verdades}
        />
        <Drawer.Screen
          name="Peron"
          options={{
            drawerLabel: "Peron",
            title: "Peron",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            )
          }}
          component={Peron}
        />
        <Drawer.Screen
          name="Evita"
          options={{
            drawerLabel: "Evita",
            title: "Evita",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={Evita}
        />

        <Drawer.Screen
          name="Noticas"
          options={{
            drawerLabel: "Noticas",
            title: "Noticas",
            drawerIcon: () => (
              <MaterialCommunityIcons name="certificate" size={20} color="#808080" />
            )
          }}
          component={Noticas}
        />
        <Drawer.Screen
          name="Contacto"
          options={{
            drawerLabel: "Contacto",
            title: "Contacto",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
            )
          }}
          component={Contacto}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
