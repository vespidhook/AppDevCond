import React, {useState, useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.setOptions({
        headerTitle: `Reservar ${route.params.data.title}`,
      });       
    });   
    return unsubscribe;    
  }, [navigation, route]);

  return (
    <C.Container>
      <C.Scroller contentContainerStyle={{paddingBottom: 40}}>
        <C.CoverImage source={{uri: route.params.data.cover}} resizeMode="cover" />

        {loading &&
          <C.LoadingIcon size="large" color="#8863e6" />
        }
      </C.Scroller>
    </C.Container>
  );
};