import React, {useState, useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.setOptions({
        headerTitle: `Reservar ${route.params.data.title}`,
      });       
    });   
    return unsubscribe;    
  }, [navigation, route]);

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  handleDateChange = () => {

  }

  return (
    <C.Container>
      <C.Scroller contentContainerStyle={{paddingBottom: 40}}>
        <C.CoverImage source={{uri: route.params.data.cover}} resizeMode="cover" />

        {loading &&
          <C.LoadingIcon size="large" color="#8863e6" />
        }

        {!loading &&
          <C.CalendarArea>
            <CalendarPicker 
              onDateChange={handleDateChange}
              minDate={minDate}
              maxDate={maxDate}
              weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
              months={[ 'Janeiro',
                        'Fevereiro',
                        'Março',
                        'Abril',
                        'Maio',
                        'Junho',
                        'Julho',
                        'Agosto',
                        'Setembro',
                        'Outubro',
                        'Novembro',
                        'Dezembro'
                      ]}
              previousTitle="Anterior"
              nextTitle="Proximo"
              selectMonthTitle="Selecione o mês em "
              selectYearTitle="Selecione o ano"
              selectedDayColor="#8863e6"
              selectedDayTextColor="#FFFFFF"
              todayBackgroundColor="transparent"
              todayTextStyle="#000000"
            />
          </C.CalendarArea>
        }
      </C.Scroller>
    </C.Container>
  );
};