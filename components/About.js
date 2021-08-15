import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["mail@exoticimports.com"],
      subject: "Inquiry",
      body: "To whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "grey" }}>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card>
            <Text>
              We welcome you to browse our online inventory, learn a little more
              about Exotic Imports, set up a test drive or contact us at any
              time for more information. Stop in to see us.
            </Text>
          </Card>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text>123 Exotic Ave</Text>
            <Text>Seattle, WA 98001</Text>
            <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: mail@exoticimports.com</Text>
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: "teal", margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default About;
