import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button, StyleSheet, ScrollView } from 'react-native';

const Evita = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [randomText, setRandomText] = useState('');


  const updateRandomContent = () => {
    const monthImages = {
      1: [
        require('../assets/images/e.jpg'),
      ],
      2: [
        require('../assets/images/e.jpg'),
      ],
      3: [
        require('../assets/images/e.jpg'),
      ],
      4: [
        require('../assets/images/e.jpg'),
      ],
      5: [
        require('../assets/images/e.jpg'),
      ],
      6: [
        require('../assets/images/e.jpg'),
      ],
      7: [
        require('../assets/images/e.jpg'),
      ],
      8: [
        require('../assets/images/e.jpg'),
      ],
      9: [
        require('../assets/images/e.jpg'),
      ],
      10: [
        require('../assets/images/e.jpg'),
      ],
      11: [
        require('../assets/images/e.jpg'),
      ],
      12: [
        require('../assets/images/e.jpg'),
      ],
    };

    const monthNames = [
      'Yo no quise ni quiero nada para mí. Mi gloria es y será siempre el escudo de Perón y la bandera de mi pueblo. Y aunque deje en el camino jirones de mi vida, yo sé que ustedes recogerán mi nombre y lo llevarán como bandera a la victoria',
      'Yo no me dejé arrancar el alma que traje de la calle, por eso no me deslumbró jamás la grandeza del poder y pude ver sus miserias. Por eso nunca me olvidé de las miserias de mi pueblo y pude ver sus grandezas',
      'Yo no quiero otro honor que no sea cariño. Aceptar otra cosa sería romper la línea de conducta que le impuse a mi corazón y darles la razón a los que no creyeron en la sinceridad de mis palabras. y que ya no podrán decir jamás que todos lo hice guiada por mezquinas y egoístas ambiciones personales',
      'Lo único que los mueve es la envidia. No hay que tenerles miedo: la envidia de los sapos nunca pudo tapar el canto de los ruiseñores',
      'Más abominable aún que los imperialistas son los hombres de las oligarquías nacionales que se entregan vendiendo y a veces regalando por monedas o por sonrisas la felicidad de sus pueblos',
      'Donde existe una necesidad nace un derecho',
      'Sangra tanto el corazón del que pide, que hay que correr y dar, sin esperar',
      'Nadie sino el pueblo me llama EvitaNadie sino el pueblo me llama Evita' ,
      'Confieso que tengo una ambición, una sola y gran ambición personal: quisiera que el nombre de Evita figurase alguna vez en la historia de mi patria',
      'Ahora si me preguntasen qué prefiero, mi respuesta no tardaría en salir de mí: me gusta más mi nombre de pueblo. Cuando un pibe me nombra Evita me siento madre de todos los pibes y de todos los débiles y humildes de mi tierra. Cuando un obrero me llama Evita me siento con gusto compañera de todos los hombres',
      'Evita, quería ser, cuando me decidí a luchar codo a codo con los trabajadores y puse mi corazón al servicio de los pobres, llevando siempre como única bandera el nombre del general Perón a todas partes. Si con ese esfuerzo mío conquisté el corazón de los obreros y de los humildes de mi Patria, eso es ya una recompensa extraordinaria que me obliga a seguir con mis trabajos y con mis luchas',
      'Prefiero ser Evita, antes de ser la esposa del Presidente, si ese Evita es dicho para calmar algún dolor en algún hogar de mi patria',
    ];

    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomImages = monthImages[randomMonth] || [
      require('../assets/images/e.jpg'),
    ];
    const randomText = monthNames[randomMonth - 1] || 'Mes Desconocido';

    setRandomImages(randomImages);
    setRandomText(randomText);
  };

  useEffect(() => {
    updateRandomContent();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {randomImages.map((imagePath, index) => (
        <Image
          key={index}
          source={imagePath}
          style={styles.image}
        />
      ))}
      <Text style={styles.text}>{randomText}</Text>
      <Button title="Frases" onPress={updateRandomContent} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 0,
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    height: '40%',
  }
});

export default Evita;
