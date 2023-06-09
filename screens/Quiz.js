import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { quizData } from "../assets/quizData";
import { set } from "react-native-reanimated";

const Quiz = () => {
  const navigation = useNavigation();
  const questLength = quizData[0].length;
  const [questionIndex, setQuestionIndex] = useState(1);
  const [displayable, setDisplayable] = useState("false");
  var currentValue;
  // const [currentValue, setCurrentValue] = useState();
  const [answer, setAnswer] = useState({});
  // find the all the highest values in answer, then return the all keys
  const max = Object.keys(answer).filter((x) => {
    return answer[x] == Math.max.apply(null, Object.values(answer));
  });
  let kindItem = [];
  const findKind = () => {
    for (let maxItem = 0; maxItem < max.length; maxItem++) {
      if (max[maxItem] / 5 <= 1) {
        kindItem.push(0);
      } else if (max[maxItem] / 5 <= 2) {
        kindItem.push(1);
      } else if (max[maxItem] / 5 <= 3) {
        kindItem.push(2);
      } else if (max[maxItem] / 5 <= 4) {
        kindItem.push(3);
      } else if (max[maxItem] / 5 <= 5) {
        kindItem.push(4);
      } else if (max[maxItem] / 5 <= 6) {
        kindItem.push(5);
      } else if (max[maxItem] / 5 <= 7) {
        kindItem.push(6);
      } else if (max[maxItem] / 5 <= 8) {
        kindItem.push(7);
      }
    }
  };
  console.log(answer);
  findKind();
  // remove the duplicate value in result[]
  const uniqueResult = [...new Set(kindItem)];
  // map every value of uniqueResult[] to get the data of major[] in quizData with each uniqueResult's value is the index of major[];
  const finalResult = uniqueResult.map((item) => {
    return quizData[1][item];
  });
  const finalMajor = uniqueResult.map((item) => {
    return quizData[2][item];
  });

  const showThingItem = () => {
    if (questionIndex <= questLength) {
      {
        return (
          <View>
            <ScrollView
              style={{
                alignSelf: "center",
                height: vh(50),
              }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "column",
                  gap: vw(2),
                  marginHorizontal: vw(5),
                  marginTop: vw(1),
                  width: vw(90),
                  paddingBottom: vw(8),
                }}
              >
                <Text style={{ marginTop: vh(1) }}>
                  Vui lòng chọn giá trị mà bạn cảm thấy phù hợp nhất với bản
                  thân, với 1 là hoàn toàn không đúng và 5 là hoàn toàn đúng.
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Câu {questionIndex}:
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {quizData[0][questionIndex - 1]}
                </Text>
              </View>
            </ScrollView>
            <View style={{ alignSelf: "center", width: vw(90) }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: vw(4),
                  width: vw(90),
                  display: { displayable },
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F9F4EE",
                    borderRadius: vw(4),
                    paddingVertical: vw(4),
                    paddingHorizontal: vw(6),
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() => {
                    // setCurrentValue(1);
                    currentValue = 1;
                    setQuestionIndex(questionIndex + 1);
                    // push in answer object with key is questionIndex and value is currentValue
                    setAnswer({ ...answer, [questionIndex]: currentValue });
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F9F4EE",
                    borderRadius: vw(4),
                    paddingVertical: vw(4),
                    paddingHorizontal: vw(6),
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() => {
                    // setCurrentValue(2);
                    currentValue = 2;
                    setQuestionIndex(questionIndex + 1);
                    setAnswer({ ...answer, [questionIndex]: currentValue });
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F9F4EE",
                    borderRadius: vw(4),
                    paddingVertical: vw(4),
                    paddingHorizontal: vw(6),
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() => {
                    // setCurrentValue(3);
                    currentValue = 3;
                    setQuestionIndex(questionIndex + 1);
                    setAnswer({ ...answer, [questionIndex]: currentValue });
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F9F4EE",
                    borderRadius: vw(4),
                    paddingVertical: vw(4),
                    paddingHorizontal: vw(6),
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() => {
                    // setCurrentValue(4);
                    currentValue = 4;
                    setQuestionIndex(questionIndex + 1);
                    setAnswer({ ...answer, [questionIndex]: currentValue });
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F9F4EE",
                    borderRadius: vw(4),
                    paddingVertical: vw(4),
                    paddingHorizontal: vw(6),
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() => {
                    // setCurrentValue(5);
                    currentValue = 5;
                    setQuestionIndex(questionIndex + 1);
                    setAnswer({ ...answer, [questionIndex]: currentValue });
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>5</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: vw(4),
                  width: vw(90),
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F9F4EE",
                    borderRadius: vw(4),
                    paddingVertical: vw(2),
                    paddingHorizontal: vw(8),
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() => {
                    setQuestionIndex(questionIndex - 1);
                  }}
                  disabled={questionIndex === 1}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    Quay lại
                  </Text>
                </TouchableOpacity>

                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    {questionIndex}/{questLength}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#F9F4EE",
                    borderRadius: vw(4),
                    paddingVertical: vw(2),
                    paddingHorizontal: vw(8),
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() => {
                    setQuestionIndex(questionIndex + 1);
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    Tiếp theo
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
    } else {
      return (
        <ScrollView style={{width: vw(90), alignSelf: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: vh(2), textAlign: 'center'}}>Các ngành học phù hợp</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: vh(2)}}>{finalResult}</Text>
          <Text style={{marginTop: vh(1)}}>{finalMajor}</Text>
        </ScrollView>
      );
    }
  };
  return (
    <View
      style={{
        height: vh(100),
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          paddingTop: 60,
          backgroundColor: "#F9F4EE",
          paddingBottom: vw(4),
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              borderRadius: 8,
              width: 42,
              height: 42,
              backgroundColor: "#208B83",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SimpleLineIcons name="menu" size={16} color="white" />
          </TouchableOpacity>
          <View>
            <Image
              source={require("../storages/avt.png")}
              style={{ width: 42, height: 42, borderRadius: 8 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 28,
            marginTop: 24,
          }}
        >
          <Text
            style={{
              width: 290,
              fontSize: 20,
              fontWeight: "900",
              color: "#1C6D64",
            }}
          >
            Gợi ý trường Đại học theo trắc nghiệm
          </Text>
        </View>
      </View>
      {showThingItem()}
      <TouchableOpacity
        style={{
          marginTop: vh(4),
          backgroundColor: "orange",
          borderRadius: vw(4),
          paddingVertical: vw(2),
          paddingHorizontal: vw(8),
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
          width: vw(30),
          alignSelf: "center",
          marginBottom: vh(6),
        }}
        onPress={() => {
          setQuestionIndex(1);
          setAnswer({});
          // setCurrentValue(0);
          currentValue = null;
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 14, textAlign: "center" }}>
          Làm lại
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
