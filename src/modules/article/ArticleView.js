import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../../styles';
import { Dropdown, Button } from '../../components';
import { Text, Title, Caption } from '../../components/StyledText';

const recommendations = [
  {
    id: 0,
    title: 'High Rise Building',
    brand: 'Shatin',
    price: '$2800',
    rating: '3.5',
  },
  {
    id: 1,
    title: 'Small Cozy Apartment',
    brand: 'Sai Kung',
    rating: '4.2',
    price: '$5600',
  },
];

export default function ArticleScreen(props) {
  const _renderRecommendationCard = ({ item }) => (
    <TouchableOpacity style={styles.recommendationItem}>
      <View style={styles.recommendationItemTopContainer}>
        {item.badge && (
          <View style={styles.recommendationItemBadge}>
            <Caption white size={12}>
              {item.badge}
            </Caption>
          </View>
        )}

        <View style={styles.recommendationItemRating}>
          <Caption bold color={colors.yellow}>
            {item.rating}
          </Caption>
        </View>
      </View>
      <Image
        style={{ width: 150, height: 100 }}
        source={require('../../../assets/images/nike1.png')}
        resizeMode="contain"
      />
      <View style={styles.recommendationBody}>
        <Text color={colors.gray} style={styles.recommendationTitle}>
          {item.title}
        </Text>
        <Text color={colors.primaryLight}>{item.brand}</Text>
        <View style={{ marginTop: 5, flexDirection: 'row' }}>
          {item.oldPrice && (
            <Text lineThrough color={colors.gray} style={{ marginRight: 10 }}>
              {item.oldPrice}
            </Text>
          )}
          <Text color={item.oldPrice ? colors.secondary : colors.gray}>
            {item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const itemParams = props.navigation.state.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Text style={{ color: colors.primaryLight }}>
            {itemParams.title.split(' ')[0]}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              marginTop: 8,
            }}
          >
            <Title bold color={colors.gray}>
              {itemParams.title}
            </Title>
            <Title bold color={colors.yellow}>
              4.8
            </Title>
          </View>
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          autoplay
          sliderWidth={Dimensions.get('window').width - 30}
          itemWidth={Dimensions.get('window').width}
          renderItem={({ item }) => (
            <Image
              resizeMode="contain"
              style={{ height: 250, width: Dimensions.get('window').width }}
              source={item}
            />
          )}
          data={[
            require('../../../assets/images/nike1.png'),
            require('../../../assets/images/nike2.png'),
          ]}
        />
        {itemParams.badge && (
          <View style={styles.badge}>
            <Caption white bold>
              {itemParams.badge}
            </Caption>
          </View>
        )}
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyHeading}>
          <Title color={colors.gray} size={23}>
            {itemParams.price}
          </Title>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text color={colors.primaryLight}>Make an Appointment</Text>
          <View style={styles.row}>
            <View style={styles.sizeDropdownContainer}>
              <Dropdown
                borderColor={colors.grey}
                color={colors.gray}
                placeholder="Select Date"
                items={[
                  '9th May, 2019',
                  '10th May, 2019',
                  '11th May, 2019',
                  '12th May, 2019',
                  '13th May, 2019',
                  '14th May, 2019',
                ]}
                onSelect={index =>
                  props.setSelectedSizeIndex(parseInt(index, 10))
                }
                selectedIndex={props.selectedSizeIndex}
              />
            </View>
            <View style={styles.quantityDropdownContainer}>
              <Dropdown
                borderColor={colors.grey}
                color={colors.gray}
                placeholder="Time"
                items={[
                  '10:00 am',
                  '11:00 am',
                  '12:00 noon',
                  '1:00 pm',
                  '2:00 pm',
                  '3:00 pm',
                  '4:00 pm',
                  '5:00 pm',
                  '6:00 pm',
                ]}
                onSelect={index =>
                  props.setSelectedQuantityIndex(parseInt(index, 10))
                }
                selectedIndex={props.selectedQuantityIndex}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsSection}>
          <View style={{ flex: 3 }}>
            <Button secondary caption="Create Appointment" rounded />
          </View>
          <View style={styles.actionButtonContainer}>
            <Button action bgColor="#E6E6E6">
              <Text>
                <Icon name="heart" size={20} color="white" />
              </Text>
            </Button>
          </View>
        </View>
        <View style={styles.description}>
          <Title bold color={colors.lightGray} size={17}>
            Product Details
          </Title>
          <Text style={styles.p}>
            This bunk room is designed for both individuals and families traveling together on a budget! Each bunk has its independent charging station and reading light. With its well thought out design, there is enough room for your bags plus all the shopping!
          </Text>
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 15 }}>
          <Button
            bordered
            bgColor={colors.grey}
            textColor={colors.gray}
            caption="Write a review"
            style={{
              width: 200,
            }}
          />
        </View>
      </View>
      <View style={styles.recommendationsContainer}>
        <Title color={colors.lightGray} style={{ marginVertical: 10 }}>
          YOU MIGHT ALSO LIKE
        </Title>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={recommendations}
          keyExtractor={item => `${item.id}`}
          renderItem={_renderRecommendationCard}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  carouselContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  bodyContainer: {
    paddingHorizontal: 15,
  },
  bodyHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  sizeDropdownContainer: {
    flex: 2,
    paddingVertical: 10,
    paddingRight: 5,
  },
  quantityDropdownContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 5,
  },
  buttonsSection: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  actionButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    marginVertical: 5,
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.gray,
  },
  description: {
    paddingTop: 10,
    marginVertical: 10,
  },
  recommendationsContainer: {
    backgroundColor: colors.white,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  recommendationItem: {
    marginVertical: 10,
    paddingBottom: 10,
    marginRight: 15,
    borderWidth: 0.7,
    borderColor: colors.lightGray,
  },
  recommendationBody: {
    backgroundColor: 'white',
    padding: 8,
  },
  recommendationTitle: {
    marginVertical: 5,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: colors.green,
    position: 'absolute',
    left: 15,
    top: 0,
  },
  recommendationItemTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingRight: 5,
  },
  recommendationItemBadge: {
    backgroundColor: colors.secondary,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  recommendationItemRating: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 3,
  },
});
