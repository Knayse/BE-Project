const testData = {
  id: 'asdba2sda65sd4a',
  name: 'Krushna Nayse',
  userName: 'admin',
  password: 'admin',
  questionsSolved: [1, 3, 4, 6, 8],
  goodSkills: ['dsa', 'cpp'],
  averageSkills: ['number theory'],
  belowAverageSkills: ['dp'],
}
export default function reducer(state = [], action) {
  switch (action.type) {
    case 'create-state':
      return [...state, { userData: testData, isLogin: false }]
    case 'login':
      return [...state, { userData: testData, isLogin: action.payload.isLogin }]
    case 'logout':
      return [...state, { userData: testData, isLogin: action.payload.isLogin }]
    case 'addQuestion':
      return [
        ...state,
        {
          userData: {
            ...testData,
            questionsSolved: [
              ...testData.questionsSolved,
              action.payload.addQuestion,
            ],
          },
        },
      ]
    default:
      return state
  }
}
