import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #f5f6fa;
    `,
    Scroller: styled.ScrollView`
        padding: 20px;
        flex: 1;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    HeadTitle: styled.Text`
        font-size: 16px;
        color: #000;
        text-align: center;
        margin-top: 10px;
    `,
    BigArea: styled.View`
        margin: 50px 0;
        align-items: center;
    `,
    ExitButtonArea: styled.TouchableOpacity`
        background-color: #8863e6;
        padding: 15px;
        justify-content: center;
        align-items: center;
    `,
    ExitButtonText: styled.Text`
        color: #fff;
        font-size: 15px;
        font-weight: bold;
    `,
    PropertyList: styled.View`
        margin: 20px 0;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #fff;
        border-width: 2px;
        border-color: #e8e9ed;
    `,
    ButtonText: styled.Text``,
} 