import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { CARS } from "../shared/cars";
import * as Animatable from "react-native-animatable";

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
      var image =
        item.id === 0
          ? require("../assets/images/Artura/2.jpg")
          : require("../assets/images/Vantage/1.jpg") && item.id === 1
          ? require("../assets/images/Gemera/1.jpg")
          : require("../assets/images/Vantage/1.jpg");

      return (
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <ListItem
            title={item.name}
            onPress={() => navigate("CarInfo", { carId: item.id })}
            leftAvatar={{
              source: image,
            }}
          />
        </Animatable.View>
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
