import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  searchBar: {
    marginBottom: 15,
    elevation: 2,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 10,
    elevation: 2,
    backgroundColor: '#fff',
  },
  cardContent: {
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginRight: 10,
  },
  numberContainer: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    elevation: 2,
  },
  numberText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  idText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
  },
  listItemText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 20,
    color: '#2c3e50',
    textAlign: 'justify',
  },
  divider: {
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
  },
  image: { height: 200, width: '100%', marginTop: 5 },
  input: { marginBottom: 10 },
  fab: {
    position: 'absolute', bottom: 20, right: 20, backgroundColor: '#4CAF50',
    width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'
  },
  fabText: { fontSize: 24, color: '#fff' },
  mapButton: {
    position: 'absolute', bottom: 20, left: 20, backgroundColor: '#2196F3',
    width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'
  },
  folkloreItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
  },
  folkloreText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 20,
    color: '#2c3e50',
    textAlign: 'justify',
  },
  favoriteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    elevation: 2,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  cameraButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    elevation: 2,
  },
  flowerPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  timestamp: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'right',
    marginTop: -5,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});