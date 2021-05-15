export const testData = [
  {
    id: '1',
    problem: 'How can we describe an array in the best possible way?',
    option: [
      'The Array shows a hierarchical structure.',
      'Arrays are immutable.',
      'Container that stores the elements of similar types',
      'The Array is not a data structure',
    ],
    answer: 'Container that stores the elements of similar types',
    tags: ['array', 'easy'],
  },
  {
    id: '2',
    problem: 'Which of the following is the correct way of declaring an array?',
    option: ['int arr[10];', 'int arr;.', 'arr[10]', 'array arr[10];'],
    answer: 'int arr[10];',
    tags: ['array', 'easy'],
  },
  {
    id: '3',
    problem:
      'When the user tries to delete the element from the empty stack then the condition is said to be a ____',
    option: [
      'Underflow',
      'Garbage Collection',
      'Overflow',
      'None of the above',
    ],
    answer: 'Underflow',
    tags: ['stack', 'easy'],
  },
  {
    id: '4',
    problem:
      'Which data structure is mainly used for implementing the recursive algorithm?',
    option: ['Queue', 'Stack', 'Binary Tree', 'Linked List'],
    answer: 'Stack',
    tags: ['stack', 'recursion', 'medium'],
  },
  {
    id: '5',
    problem: 'Which of the following is the prefix form of A+B*C?',
    option: ['A+(BC*)', '+AB*C', 'ABC+*', '+A*BC'],
    answer: '+A*BC',
    tags: ['stack', 'medium'],
  },
  {
    id: '6',
    problem:
      'Which one of the following is the correct way to increment the rear end in a circular queue?',
    option: [
      'rear =rear+1',
      '(rear+1) % max',
      '(rear % max) + 1',
      'None of the above',
    ],
    answer: '(rear+1) % max',
    tags: ['queue', 'medium'],
  },
  {
    id: '7',
    problem:
      'Which one of the following is not the application of the Queue data structure?',
    option: [
      'Resource shared between various systems',
      'Data is transferred asynchronously',
      'Load balancing',
      'Balancing of symbols',
    ],
    answer: 'Balancing of symbols',
    tags: ['queue', 'medium'],
  },
  {
    id: '8',
    problem:
      'The necessary condition to be checked before deletion from the Queue is__',
    option: ['Overflow', 'Underflow', 'Rear Value', 'Front Value'],
    answer: 'Underflow',
    tags: ['queue', 'easy'],
  },
  {
    id: '9',
    problem:
      'Which of the following is the time complexity to search an element in the linked list?',
    option: ['O(1)', 'O(n)', 'O(logn)', 'O(nlogn)'],
    answer: 'O(n)',
    tags: ['linked list', 'search', 'easy'],
  },
  {
    id: '10',
    problem:
      'Which of the following statement is not true about the doubly linked list?',
    option: [
      'We can traverse in both the directions.',
      'It requires extra space',
      'Implementation of doubly linked list is easier than the singly linked list',
      'It stores the addresses of the next and the previous node',
    ],
    answer:
      'Implementation of doubly linked list is easier than the singly linked list',
    tags: ['linked list', 'easy'],
  },
  {
    id: '11',
    problem:
      'What is the maximum number of children that a node can have in a binary tree?',
    option: ['3', '1', '4', '2'],
    answer: '2',
    tags: ['tree', 'easy'],
  },
  {
    id: '12',
    problem:
      'Which of the following options is not true about the Binary Search tree?',
    option: [
      'The value of the left child should be less than the root node',
      'The value of the right child should be greater than the root node.',
      'The left and right sub trees should also be a binary search tree',
      'None of the above',
    ],
    answer: 'None of the above',
    tags: ['bst', 'medium'],
  },
  {
    id: '13',
    problem:
      'What is the maximum number of children that a node can have in a binary tree?',
    option: ['3', '1', '4', '2'],
    answer: '2',
    tags: ['tree', 'easy'],
  },
  {
    id: '14',
    problem:
      'A connected planar graph having 6 vertices, 7 edges contains _____________ regions.',
    option: ['15', '3', '1', '11'],
    answer: '3',
    tags: ['graph', 'medium'],
  },
  {
    id: '15',
    problem: 'What is time complexity of binary search?',
    option: ['O(1)', 'O(n)', 'O(logn)', 'O(nlogn)'],
    answer: 'O(logn)',
    tags: ['tree', 'binary search', 'bst', 'easy'],
  },
  {
    id: '16',
    problem:
      'Given  Inorder traversal is { 4, 2, 1, 7, 5, 8, 3, 6 }, and  Preorder traversal is { 1, 2, 4, 3, 5, 7, 8, 6 }, find Postorder traversal for a tree.',
    option: [
      '4 2 7 8 5 6 3 1',
      '4 2 7 8 5 6 1 3',
      '8 2 7 6 5 4 3 1',
      '4 2 7 1 5 8 6 3',
    ],
    answer: '4 2 7 8 5 6 3 1',
    tags: ['tree', 'medium'],
  },
  {
    id: '17',
    problem: 'The complexity of Bubble sort algorithm is',
    option: ['O(n)', 'O(n2)', 'O(logn)', 'O(nlogn)'],
    answer: 'O(n2)',
    tags: ['sort', 'array', 'easy'],
  },
  {
    id: '18',
    problem: 'In linear search algorithm the Worst case occurs when',
    option: [
      'The item is somewhere in the middle of the array',
      'The item is not in the array',
      'The item is the last element of array',
      'The item is the last element in the array or is not there at all',
    ],
    answer: 'The item is the last element in the array or is not there at all',
    tags: ['sort', 'array', 'medium'],
  },
  {
    id: '19',
    problem:
      'Which of the following trait of a hash function is most desirable?',
    option: [
      'It should cause less collisions',
      'It should cause more collisions',
      'It should be easy to implement',
      'It should occupy less space',
    ],
    answer: 'It should cause less collisions',
    tags: ['hast table', 'easy'],
  },
  {
    id: '20',
    problem:
      'When inorder traversing a tree resulted in E A C K F H D B G, the preorder traversing would return',
    option: ['FAEKCDBHG', 'FAEKCDHGB', 'EAFKHDCBG', 'FEAKDCHBG'],
    answer: 'FAEKCDHGB',
    tags: ['tree', 'hard'],
  },
  {
    id: '21',
    problem:
      'Which of the following data-structures are indexed data-structures?',
    option: [
      'Linear arrays',
      'Linked List',
      'Both of above',
      'None of the above',
    ],
    answer: 'Linear arrays',
    tags: ['array', 'linked list', 'easy'],
  },
  {
    id: '22',
    problem:
      'Which of the following is not a limitation of the binary search algorithm?',
    option: [
      'The list must be sorted',
      'The requirement of sorted array is expensive when a lot of insertion and deletions are needed',
      'there must be mechanism to access middle element',
      'a binary search algorithm is not efficient when data elements are more than 1000',
    ],
    answer:
      'a binary search algorithm is not efficient when data elements are more than 1000',
    tags: ['binary search', 'easy'],
  },
  {
    id: '23',
    problem: 'The complexity of merge sort is?',
    option: ['O(n)', 'O(logn)', 'O(n2)', 'O(nlogn)'],
    answer: 'O(nlogn)',
    tags: ['sort', 'easy'],
  },
  {
    id: '24',
    problem:
      'Which of the following datastructures is a linear data-structure?',
    option: ['Tree', 'Graph', 'Array', 'None of the above'],
    answer: 'Array',
    tags: ['array', 'easy'],
  },
]

export const getRecommendation = (tagsArray, myArr) => {
  let S1 = encodeTags(tagsArray)
  // console.log(tagsArray, 'tagsArray')
  // console.log(myArr, 'myArr')
  let id = 0
  let maxsim = 0
  for (let i = 0; i < myArr.length; i++) {
    let obj = myArr[i]
    //console.log(obj, 'obj')
    //console.log(obj.tags, 'obj.tags')
    let S2 = encodeTags(obj.tags)
    //console.log(S1, 'S1')
    //console.log(S2, 'S2')
    const similarity = cosineSimilarity(S1, S2)
    if (similarity > maxsim) {
      //console.log(id, 'comparing')
      maxsim = similarity
      id = obj.id
    }
    // console.log(obj.id, ' -----> ', similarity)
  }
  return id
}

const encodeTags = (tagsArray) => {
  let tag = ''
  const allTags = [
    'linked list',
    'tree',
    'bst',
    'hash table',
    'stack',
    'queue',
    'recursion',
    'search',
    'array',
    'binary_search',
    'implementation',
    'dp',
    'greedy',
    'sort',
    'graph',
    'traversal',
    'easy',
    'medium',
    'hard',
  ]
  //console.log(tagsArray, 'tagsArray')
  for (let i = 0; i < allTags.length; i++) {
    if (tagsArray.includes(allTags[i])) {
      tag += '1'
    } else {
      tag += '0'
    }
  }
  // console.log(tag)
  return tag
}

const cosineSimilarity = (A, B) => {
  let dotproduct = 0
  let mA = 0
  let mB = 0
  for (let i = 0; i < A.length; i++) {
    dotproduct += A[i] * B[i]
    mA += A[i] * A[i]
    mB += B[i] * B[i]
  }
  mA = Math.sqrt(mA)
  mB = Math.sqrt(mB)
  //console.log(dotproduct, 'dotproduct', mA * mB, 'mA*mB')
  let similarity = dotproduct / (mA * mB)
  return similarity
}
