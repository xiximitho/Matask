import { View } from "native-base";
import * as React from "react";
import { Checkbox } from "react-native-paper";

const TaskCheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View
      style={{ flex: 0.19, alignContent: "flex-end", justifyContent: "center" }}
    >
      <Checkbox.Item
        uncheckedColor={"#000000"}
        color={"#000000"}
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default TaskCheckBox;
