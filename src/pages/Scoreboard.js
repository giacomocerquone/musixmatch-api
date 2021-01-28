import GenericText from "components/atoms/GenericText";
import Header from "components/atoms/Header";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { getStats } from "store/app.reducer";

const ScoreRow = ({ item }) => {
  return (
    <GenericText text={`${item.username} - ${item.points} - ${item.nGames}`} />
  );
};

const Scoreboard = () => {
  const stats = useSelector(getStats);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stats}
        renderItem={ScoreRow}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<Header title="Punteggi" />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Scoreboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  list: {
    paddingBottom: 20,
  },
});
