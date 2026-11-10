// Published question pack. Images will be added as:
// assets/q01_crop.jpg and assets/q01_original.jpg (through q29).
// The pack version is bumped whenever questions, roles or photos are updated.
window.RB_QUESTION_PACK_VERSION = 1;
window.RB_QUESTION_PACK = Array.from({length:29}, (_,i) => ({
  id: i + 1,
  crop: "",
  original: "",
  role: "",
  choices: ["Đồng nghiệp A", "Đồng nghiệp B", "Đồng nghiệp C", "Đồng nghiệp D"],
  correct: 0
}));
