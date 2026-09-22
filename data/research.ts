export const research = {
  title: "Human vs Neural Network Category Learning",
  status: "Ongoing research",
  question: "How does increasing label noise affect category-learning accuracy and generalization in college students compared with neural networks?",
  introduction: "This study examines how people and neural networks learn categories when training labels become less reliable. The work is in progress; results and conclusions are not yet available.",
  conditions: [
    { name: "Clean-label condition", description: "Establish a baseline using category examples with consistent labels." },
    { name: "Entrenched label-noise condition", description: "Introduce persistent label noise during learning to examine its effect on later decisions." },
  ],
  comparison: "Compare college students and neural networks on category-learning accuracy and generalization across the conditions.",
  design: {
    categories: 6,
    trainingImagesPerCategory: 10,
    trainingImagesTotal: 60,
    correctTestImages: 30,
    stimuli: "Visually generated unfamiliar stimuli with category-wide color consistency and multiple visual features distinguishing categories.",
    noise: "Approximately 20% of selected training examples repeatedly receive an incorrect category label. Entrenched noise uses repeated incorrect labels rather than independent random errors.",
  },
  humanTask: "College students learn categories from labeled examples, then classify correct unseen examples to measure learning accuracy and transfer to new stimuli.",
  modelTask: "MLP, CNN, and transfer-learning CNN approaches will be trained separately on clean labels and entrenched-noise labels for comparison.",
  relatedResearch: [
    { authors: "Homa & Blair", area: "Entrenched versus probabilistic erroneous feedback" },
    { authors: "Rolnick et al.", area: "Deep learning and label noise" },
    { authors: "Spicer & Sanborn", area: "Human and neural-network generalization" },
    { authors: "Ashby & Ell", area: "Human category-learning systems" },
  ],
};
