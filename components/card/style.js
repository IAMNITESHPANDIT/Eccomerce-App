import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  cardContainer: {
    width: '45%',
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end', // Moves the text to the bottom
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10, // Adds some space from the bottom
  },
  statusText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});
