import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { CARS } from "../shared/cars";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: CARS,
    };
  }

  static navigationOptions = {
    title: "Inventory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderInventoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          onPress={() => navigate("CarInfo", { carId: item.id })}
          leftAvatar={{
            source: item.image && require("../assets/images/Vantage/1.jpg"),
          }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.cars}
        renderItem={renderInventoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Inventory;
