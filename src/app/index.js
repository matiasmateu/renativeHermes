import React from 'react';
import { View, Text } from 'react-native';
import { Api } from 'renative';

const App = () => {
    const isHermes = () => !!global.HermesInternal;
    console.log('Hermes: ', isHermes())
    return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>
            {'This is blank app'}
        </Text>
        <Text>
            {`platform: ${Api.platform}`}
        </Text>
        <Text>
            {`factor: ${Api.formFactor}`}
        </Text>
    </View>
)};

export default App;
