import React, { useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import useViewModel from "./ViewModel";
import { RolesItem } from "./Item";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;
interface Props extends StackScreenProps<RootStackParamList, "RolesScreen"> {}
export const RolesScreen = ({ navigation }: Props) => {
  const { user } = useViewModel();
  const height = Dimensions.get("window").width;
  const widht = Dimensions.get("window").height;
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [model, setModel] = useState<any>("horizontal-stack");
  const [snapDirection, setSnapDirection] = useState<"left" | "right">("left");
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: widht - 370,
        height: 200,
      }}
    >
      {/*<FlatList
          data={user?.roles}
          renderItem={({item})=>
            <RolesItem
             rol={item}
             height={420}
             widht={widht-500}
            />
          }
        />*/}
      <Carousel
        width={widht}
        height={height}
        data={user?.roles!}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <RolesItem rol={item} height={420} widht={widht - 500} navigation={navigation} />
        )}
        modeConfig={{
          stackInterval: 70,
          snapDirection,
        }}
        mode={model}
      />
    </View>
  );
};
