import React from 'react';
import { View, Image, Text } from 'react-native';

const Calendario = () => {
  const currentMonth = new Date().getMonth() + 1; // Obtener el mes actual (1-12)

  const getImagePaths = () => {
    const monthImages = {
      1: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      2: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      3: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      4: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      5: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      6: [
        require('../assets/images/e.jpg'),
      ],
      7: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      8: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      9: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      10: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      11: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
      12: [
        require('../assets/images/e.jpg'),
        require('../assets/images/e.jpg'),
      ],
    };

    return monthImages[currentMonth] || [
      require('../assets/images/e.jpg'),
      require('../assets/images/e.jpg'),
    ]; // Imágenes predeterminadas en caso de no coincidir con ningún mes
  };

  const getMonthText = () => {
    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    return monthNames[currentMonth - 1] || 'Mes Desconocido';
  };

  return (
    <View>
      {getImagePaths().map((imagePath, index) => (
          <Image
            key={index}
            source={imagePath}
            style={{ width: "100%", height:"80%", resizeMode: 'contain'}}
          />
      ))}
      <Text>{getMonthText()}</Text>
    </View>
  );
};

export default Calendario;
