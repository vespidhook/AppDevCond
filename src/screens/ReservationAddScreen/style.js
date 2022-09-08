import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #f5f6fa;
        padding: 20px;
    `,    
    Scroller: styled.ScrollView`
        flex: 1;
    `,
    CoverImage: styled.Image`
        height: 150px;
    `,
    LoadingIcon: styled.ActivityIndicator`
        margin-top: 20px;
    `,
}