import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { CARS } from "../shared/cars";
import { Card, Icon } from "react-native-elements";
import Carousel from "react-native-snap-carousel";

function RenderCar(props) {
  const { car } = props;

  if (car) {
    var image2 =
      car.id === 0
        ? require("../assets/images/Artura/2.jpg")
        : require("../assets/images/Vantage/1.jpg") && car.id === 1
        ? require("../assets/images/Gemera/1.jpg")
        : require("../assets/images/Vantage/1.jpg");
    return (
      <Card featuredTitle={car.name} image={image2}>
        <Text style={{ margin: 10 }}>{car.description}</Text>
        <Icon
          name={props.favorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          raised
          reverse
          onPress={() =>
            props.favorite
              ? console.log("Already set as a favorite")
              : props.markFavorite()
          }
        />
      </Card>
    );
  }
  return <View />;
}

class CarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: CARS,
      favorite: false,
    };
  }

  markFavorite() {
    this.setState({ favorite: true });
  }

  static navigationOptions = {
    title: "Car Information",
  };

  render() {
    const carId = this.props.navigation.getParam("carId");
    const car = this.state.cars.filter((car) => car.id === carId)[0];

    return (
      <ScrollView>
        <RenderCar
          car={car}
          favorite={this.state.favorite}
          markFavorite={() => this.markFavorite()}
        />
      </ScrollView>
    );
  }
}

export default CarInfo;
