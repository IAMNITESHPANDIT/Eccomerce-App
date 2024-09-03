import {StyleSheet} from  'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
      },
      detailsContainer: {
        padding: 20,
      },
      itemName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      category: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
      },
      ratingContainer: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#e47911',
        marginBottom: 15,
      },
      description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
      },
      infoRow: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 80,
      },
      infoValue: {
        fontSize: 16,
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      quantityButton: {
        width: 40,
        height: 40,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      quantity: {
        fontSize: 18,
        marginHorizontal: 15,
      },
      actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addToCartButton: {
        backgroundColor: '#ffd814',
        marginRight: 10,
      },
      buyNowButton: {
        backgroundColor: '#ffa41c',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      errorText: {
        fontSize: 16,
        color: 'red',
      },

  });