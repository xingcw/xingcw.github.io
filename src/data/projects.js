// TODO Add a couple lines about each project
const data = [
  {
    title: 'Learning Driven Pose Selection for Sampling-based Planning',
    subtitle: 'Semester Project',
    image: '/images/projects/sp.png',
    date: 'Oct. 2021 - Feb. 2022',
    video_link: 'https://youtube.com/playlist?list=PL05BR7PIAwqDSjO-JhPe6wjUJ8h022wVk',
    slides_link: 'https://docs.google.com/presentation/d/1K5CbnFRSrAAyoEQsiZFr9_zryfHRtAEs2Zazve4KSZk/edit?usp=sharing',
    title_link: '',
    subtitle_link: '',
    code_link: '',
    author: 'Chunwei Xing',
    desc:
    'In this project, we trained a RL policy to sample poses and joint configurations for a excavator to traverse different terrains '
    + 'given its global trajectory on the 2D map. Our method outperforms trditional uniform sampling methods and shows good generalization abilities. ',
  },
  {
    title: 'Descriptellation: Deep Learned Constellation Descriptors for SLAM',
    subtitle: 'Perception and Learning for Robotics - Course Project',
    video_link: 'https://www.youtube.com/watch?v=j_28-maRwmo&list=PL05BR7PIAwqAx0VgwNVHPepqPwg433qfx&index=1',
    title_link: 'https://arxiv.org/abs/2203.00567',
    subtitle_link: 'https://asl.ethz.ch/education/lectures/perception_and_learning_for_robotics.html',
    code_link: 'https://github.com/ethz-asl/Descriptellation',
    slides_link: 'https://docs.google.com/presentation/d/15TJfORM8ugRDQLiqKYFq9NjYdliNyy4l9T3FXxn3TvI/edit?usp=sharing',
    image: '/images/projects/descriptellation.jpg',
    date: 'Feb. 2021 - Jun. 2021',
    author: 'Chunwei Xing | Xinyu Sun',
    desc:
      'We formulate a learning-based approach by constructing constellations from semantically meaningful objects '
      + 'and use Deep Graph Convolution Networks to map the constellation representation to a descriptor. Our method outperforms the PointNet and handcrafted constellation descriptors for global localization, and shows robustness against different types of noise.',
  },
  {
    title: 'Semi-Direct Visual Odometry',
    subtitle: 'Vision Algorithms for Mobile Robotics - Course Project',
    title_link: 'https://rpg.ifi.uzh.ch/teaching.html',
    video_link: 'https://youtube.com/playlist?list=PL05BR7PIAwqCpqSakaCp8zM4E67eLsHRL',
    slides_link: '',
    subtitle_link: 'https://rpg.ifi.uzh.ch/teaching.html',
    code_link: 'https://github.com/rwn17/VAMR',
    image: '/images/projects/vamr.png',
    date: 'Dec. 2021 - Jan. 2022',
    author: 'Chunwei Xing | Jin Cheng | Weining Ren | Changlin Qian',
    desc:
      'In this mini-project, we developed a semi-direct visual odometry and achieved good performance on KITTI, Garage, Malaga and customized datasets. ',
  },
  {
    title: 'MPC-Based Path Planning and Collision Avoidance for Mobile Robots',
    subtitle: 'Planning and Decision Making for Autonomous Robots - Course Project',
    title_link: '',
    subtitle_link: 'https://idsc-frazzoli.github.io/PDM4AR-exercises/10-final21.html',
    code_link: 'https://github.com/xingcw/PDM4AR_Project',
    video_link: 'https://youtube.com/playlist?list=PL05BR7PIAwqD3PHP3Iehm7MMpkkuLFh5O',
    slides_link: '',
    image: '/images/projects/pdm4ar.png',
    date: 'Dec. 2021 - Jan. 2022',
    author: 'Chunwei Xing | Changlin Qian | Kiwan Wong',
    desc: 'In this program exercise, we implemented a path planing and collision avoidance algorithm based on MPC '
      + 'to control the spacecraft to explore in the space full of static and dynamic obstacles. '
      + 'A global path planner, RRT*, a local path follower, MPC controller, and a collision detection and avoidance mechanism are implemented.',
  },
  {
    title: 'Kinematics and Dynamics Modelling of Legged Robots',
    subtitle: 'Computational Models of Motion - Mini-Projects',
    title_link: '',
    subtitle_link: '',
    video_link: 'https://youtube.com/playlist?list=PL05BR7PIAwqCvgHkd9qis5xTmW69q2vH0',
    slides_link: '',
    code_link: 'https://github.com/CMM-22',
    image: '/images/projects/cmm.png',
    date: 'Mar. 2022 - Jun. 2022',
    author: 'Chunwei Xing',
    desc: 'In these mini-projects, I implemented various tasks to model the kinematics and dynamics of the legged robots.',
  },
];

export default data;
