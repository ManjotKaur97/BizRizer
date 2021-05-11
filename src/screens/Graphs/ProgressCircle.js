import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
import ActivityRings from 'react-native-activity-rings';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activityData = [
      {
        value: 0.7, // ring will use color from theme
        color: '#0080ff',
        backgroundColor: '#cccccc',
      },
      {
        label: 'ACTIVITY',
        value: 0.8,
        color: '#00b300',
        backgroundColor: '#cccccc',
      },
      {
        label: 'RINGS',
        value: 0.65,
        color: '#ffd500',
        backgroundColor: '#cccccc',
      },
    ];

    const activityConfig = {
      width: 170,
      height: 170,
    };
    return <ActivityRings data={activityData} config={activityConfig} />;
  }
}
// export default class Home extends Component{
//   constructor(props){
//       super(props)

//   }

//   render(){
//     const data = {
//       // labels: ["Swim", "Bike", "Run"], // optional
//       data: [0.6, 0.8, 0.7]
//     };
//     const chartConfig = {
//       backgroundGradientFrom: "#1E2923",
//       backgroundGradientFromOpacity: 0,
//       backgroundGradientTo: "#08130D",
//       backgroundGradientToOpacity: 0,
//       color: (opacity = 1) => `rgba(70, 25, 146, ${opacity})`,
//       strokeWidth: 2, // optional, default 3
//       barPercentage: 0.5,
//       useShadowColorFromDataset: false // optional
//     };
//     const screenWidth = Dimensions.get("window").width;
//     return(
//       <ProgressChart
//       data={data}
//       width={screenWidth}
//       height={220}
//       strokeWidth={16}
//       radius={32}
//       chartConfig={chartConfig}
//       hideLegend={true}
//     />
//     );
//   }
// };
