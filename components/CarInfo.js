import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { CARS } from "../shared/cars";
import { Card, Icon } from "react-native-elements";

function RenderCar(props) {
  const { car } = props;

  if (car) {
    return (
      <Card featuredTitle={car.name} image={car.image}>
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
