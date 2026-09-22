export type Project = { slug: string; route: string; number: string; title: string; type: string; description: string; technologies: string[]; links: { demo?: string; github?: string } };
export const projects: Project[] = [
  { slug: "academic-research-assistant", route: "/projects/academic-research-assistant", number: "01", title: "Academic Research Assistant", type: "Flagship · Applied AI", description: "A RAG-based academic research platform for uploading papers, organizing documents, and asking questions grounded in the literature with source citations.", technologies: ["React", "TypeScript", "Django", "PostgreSQL", "pgvector", "ONNX Runtime", "Sentence Transformers", "LLM API"], links: { demo: "https://academic-research-assistant-teal.vercel.app/", github: "https://github.com/Divinedickson/academic-research-assistant" } },
  { slug: "plant-disease-detector", route: "/projects/plant-disease-detector", number: "02", title: "Plant Disease Detector", type: "Computer Vision", description: "A deep-learning application that classifies plant diseases from leaf images through a responsive web interface.", technologies: ["PyTorch", "React", "Django", "Computer Vision"], links: { github: "https://github.com/Divinedickson/plant-disease-detector" } },
  { slug: "category-learning", route: "/research/category-learning", number: "03", title: "Human vs Neural Network Category Learning", type: "Ongoing Research", description: "Investigating how increasing label noise affects category-learning accuracy and generalization in college students compared with neural networks.", technologies: ["Category Learning", "Label Noise", "Human–AI Comparison"], links: {} },
];

export const academicCaseStudy = {
  problem: "Researchers and students often work across many academic papers. They need a way to search and ask questions across their documents while keeping a clear path back to the original sources.",
  solution: "A full-stack retrieval-augmented generation system that organizes private research collections, processes uploaded PDFs, retrieves relevant passages, and generates answers with source references.",
  capabilities: ["User authentication", "Document collections", "PDF upload and text extraction", "Page-aware chunking", "Document embeddings", "Vector similarity search", "Retrieval-augmented question answering", "Source citations and grounded responses"],
  stack: [
    { category: "Frontend", technologies: ["React", "TypeScript"] },
    { category: "Backend", technologies: ["Django", "Django REST Framework"] },
    { category: "Database", technologies: ["PostgreSQL", "pgvector"] },
    { category: "AI / Retrieval", technologies: ["Sentence Transformers", "all-MiniLM-L6-v2", "ONNX Runtime", "cosine similarity", "HNSW"] },
    { category: "Infrastructure", technologies: ["Vercel-ready frontend", "Render-ready backend", "S3-compatible private object storage support"] },
  ],
  architecture: [
    { title: "User", detail: "Uploads papers and asks research questions" },
    { title: "React + TypeScript frontend", detail: "Collections, documents, and question interface" },
    { title: "Django REST API", detail: "Authentication and collection-scoped requests" },
    { title: "Document processing", detail: "PDF → PyMuPDF text extraction → page-aware chunks" },
    { title: "Embeddings", detail: "Sentence Transformers or compatible ONNX Runtime provider" },
    { title: "PostgreSQL + pgvector", detail: "Stores document chunks and embedding vectors" },
    { title: "HNSW vector retrieval", detail: "Finds relevant passages using cosine distance" },
    { title: "Relevant context → LLM API", detail: "Passes bounded source passages to the generation provider" },
    { title: "Grounded answer + citations", detail: "Returns an answer with references to retrieved pages" },
  ],
  engineeringWork: [
    { title: "Authentication", detail: "JWT-based authentication protects routes and scopes collections to their owners." },
    { title: "PDF processing", detail: "PyMuPDF extracts text one page at a time; chunking keeps page references available for citations." },
    { title: "Embeddings", detail: "all-MiniLM-L6-v2 produces 384-dimensional vectors for semantic search." },
    { title: "ONNX option", detail: "A compatible ONNX Runtime provider mirrors the Sentence Transformers embedding pipeline for a lighter deployment option." },
    { title: "Vector retrieval", detail: "PostgreSQL pgvector stores normalized embeddings and uses an HNSW index with cosine distance." },
    { title: "Grounded generation", detail: "Retrieved passages are supplied to an LLM provider; citation references are validated against retrieved sources." },
    { title: "Deployment design", detail: "The frontend and backend have separate deployment configuration, with support for private remote PDF storage." },
  ],
  challenges: ["Keeping the Sentence Transformers and ONNX embedding paths compatible", "Processing PDFs held in remote private storage", "Enforcing ownership boundaries across users, collections, and documents", "Limiting retrieved context and handling answers without sufficient support", "Coordinating a frontend, API, database, model artifacts, and object storage"],
  lessons: ["How vector indexing and retrieval fit into a RAG system", "Designing APIs around document and collection ownership", "Testing citation references and authentication boundaries", "Making inference providers portable across environments", "Preparing multi-service deployment and validating each integration"],
};

export const plantCaseStudy = {
  overview: "A full-stack leaf-image screening application with a React upload interface, a Django REST API, and a PyTorch classifier for 38 PlantVillage-style plant and condition classes.",
  problem: "A leaf photo can be a useful starting point for identifying visible plant conditions, but an automated prediction needs to be presented with its limits in mind.",
  solution: "Users upload a leaf image, the API validates it, and a PyTorch model returns a predicted plant and condition with a confidence value for preliminary screening.",
  modelWorkflow: [
    { title: "Leaf image", detail: "Select or drop a JPEG, PNG, or WebP image" },
    { title: "Validation", detail: "Frontend and API check file type, size, and image readability" },
    { title: "Preprocessing", detail: "Convert and normalize the image for inference" },
    { title: "PyTorch inference", detail: "Classify among 38 PlantVillage-style classes" },
    { title: "Result", detail: "Show plant, condition, and model confidence with a screening disclaimer" },
  ],
  architecture: [
    { title: "React frontend", detail: "Upload, image preview, and result states" },
    { title: "Django REST API", detail: "Image validation and prediction endpoint" },
    { title: "PyTorch model", detail: "Leaf-image classification" },
    { title: "Screening result", detail: "Predicted class, confidence, and usage guidance" },
  ],
  stack: [
    { category: "Frontend", technologies: ["React"] },
    { category: "Backend", technologies: ["Django", "Django REST Framework"] },
    { category: "Machine Learning", technologies: ["PyTorch", "Computer Vision", "PlantVillage-style data"] },
  ],
  uncertainty: "The current application displays model confidence and explains that predictions are preliminary screening. A low-confidence threshold should be used to mark uncertain predictions; that behavior is not yet verified in the project implementation.",
  lessons: ["Validate uploaded files before inference", "Keep model preprocessing consistent with training expectations", "Communicate confidence without treating it as a diagnosis", "Separate the browser interface, API, and model inference service"],
};
