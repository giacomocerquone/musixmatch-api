import QuizCard from "components/atoms/QuizCard";
import Button from "components/atoms/Button";
import React, { useCallback, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { cardsPerQuiz } from "constants/params";
import { useDispatch } from "react-redux";
import userSlice from "reducers/user";

import Timer from "./Timer";

const Quiz = ({ finishGame }) => {
  const carouselRef = useRef();
  const dispatch = useDispatch();
  const [points, setPoints] = useState(0);

  const goToNextCard = useCallback(() => {
    if (carouselRef.current.currentIndex === cardsPerQuiz - 1) {
      finishGame();
      dispatch(userSlice.actions.updateUserStats({ points }));
    } else {
      carouselRef.current.snapToNext();
    }
  }, [finishGame, dispatch, points]);

  const onPressedAnswer = () => {
    if (true) {
      setPoints((p) => p + 1);
    }
    goToNextCard();
  };

  return (
    <>
      <Timer onExpiration={goToNextCard} />
      <View style={styles.mainContent}>
        <Carousel
          carousel={carouselRef}
          containerCustomStyle={styles.carouselContainer}
          data={[
            "This is my life and that is yours",
            "This is my life and that is yours",
            "This is my life and that is yours",
          ]}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width - 50}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <QuizCard item={item} />}
        />
        <View>
          <Button label="Renato bennato" onPress={onPressedAnswer} />
          <Button label="A zio zia" onPress={onPressedAnswer} />
          <Button label="A mio mia" onPress={onPressedAnswer} />
        </View>
      </View>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  mainContent: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  carouselContainer: {
    flexGrow: 0,
  },
});
