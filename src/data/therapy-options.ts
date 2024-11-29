export interface TherapyOption {
  id: string
  title: string
  price: number
  features: string[]
}

export const therapyOptions: TherapyOption[] = [
  {
    id: 'group',
    title: 'Group Therapy',
    price: 3200,
    features: [
      'Joint Evaluation',
      'Communication Exercises',
      'Conflict Resolution',
      'Goal Setting',
      'Follow up plan'
    ]
  },
  {
    id: 'individual',
    title: 'Individual Therapy',
    price: 3200,
    features: [
      'Joint Evaluation',
      'Communication Exercises',
      'Conflict Resolution',
      'Goal Setting',
      'Follow up plan'
    ]
  },
  {
    id: 'couple',
    title: 'Couple Therapy',
    price: 3200,
    features: [
      'Joint Evaluation',
      'Communication Exercises',
      'Conflict Resolution',
      'Goal Setting',
      'Follow up plan'
    ]
  }
]
