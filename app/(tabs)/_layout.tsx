import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          // href: "/home"
          headerTitle: "home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // href: {
          // pathname: "/about"
          headerTitle: "profile",
          // }
        }}
      />
    </Tabs>
  );
};
