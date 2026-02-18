import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  .hero-section {
    background: linear-gradient(135deg, #00897b 0%, #00796b 100%);
    color: white;
    padding: 6rem 0 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero-content h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .hero-content p {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }

  .hero-stats {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(200px, 1fr))[auto-fit];
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .stat-card {
    background: rgba(255,255,255,0.1);
    padding: 2rem;
    border-radius: 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .section-intro {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-intro h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: #004d40;
    margin-bottom: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .section-intro p {
    font-size: 1.2rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }

  .swipeable-content-section {
    background: white;
    padding: 3rem 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    margin-bottom: 3rem;
    transition: -webkit-transform 0.3s, -moz-transform 0.3s, -o-transform 0.3s, transform 0.3s, -webkit-box-shadow 0.3s, -moz-box-shadow 0.3s, box-shadow 0.3s;
  }

  .swipeable-content-section:hover {
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }

  .swipeable-content-section h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #00897b;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .swipeable-content-section h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #00897b, #00796b);
    border-radius: 2px;
  }

  .swipeable-container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
  }

  .swipeable-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    border-radius: 16px;
    background: #f8f9fa;
  }

  .swipe-slide {
    min-width: 100%;
    transition: -webkit-transform 0.5s ease;
    -moz-transition: -moz-transform 0.5s ease;
    -o-transition: -o-transform 0.5s ease;
    transition: transform 0.5s ease;
    display: none;
  }

  .swipe-slide.active {
    display: block;
  }

  .slide-content {
    padding: 2rem;
    text-align: center;
  }

  .slide-content img {
    width: 100%;
    max-width: 400px;
    height: 250px;
    -webkit-object-fit: cover;
    -moz-object-fit: cover;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }

  .slide-content h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: #004d40;
    margin-bottom: 1rem;
  }

  .slide-content p {
    color: #666;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  .swipe-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.9);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.3s;
    z-index: 10;
  }

  .swipe-arrow:hover {
    background: white;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    transform: translateY(-50%) scale(1.1);
  }

  .swipe-arrow-left {
    left: -25px;
  }

  .swipe-arrow-right {
    right: -25px;
  }

  .swipe-dots {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.5rem;
  }

  .swipe-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e0e0e0;
    cursor: pointer;
    transition: all 0.3s;
  }

  .swipe-dot.active {
    background: #00897b;
    transform: scale(1.2);
  }

  .age-groups-section {
    background: white;
    padding: 4rem 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    margin-bottom: 3rem;
  }

  .age-groups-section h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: #004d40;
    text-align: center;
    margin-bottom: 3rem;
  }

  .age-cards-container {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 1rem 0;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .age-card {
    min-width: 280px;
    background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    overflow: hidden;
  }

  .age-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #00897b, #00796b);
  }

  .age-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }

  .age-card h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: #004d40;
    margin-bottom: 1rem;
  }

  .age-card p {
    color: #555;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .age-card .quote {
    font-style: italic;
    color: #00897b;
    font-weight: 500;
    background: rgba(255,255,255,0.5);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .cta-section {
    background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
    padding: 4rem 2rem;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 3rem;
  }

  .cta-section h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: #004d40;
    margin-bottom: 1rem;
  }

  .cta-section p {
    font-size: 1.2rem;
    color: #00695c;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-btn {
    background: #00897b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cta-btn:hover {
    background: #00695c;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,137,123,0.3);
  }

  .cta-btn.secondary {
    background: transparent;
    color: #00897b;
    border: 2px solid #00897b;
  }

  .cta-btn.secondary:hover {
    background: #00897b;
    color: white;
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }

    .swipeable-content-section {
      padding: 2rem 1rem;
    }

    .swipe-arrow {
      width: 40px;
      height: 40px;
    }

    .swipe-arrow-left {
      left: -20px;
    }

    .swipe-arrow-right {
      right: -20px;
    }

    .age-cards-container {
      gap: 1rem;
    }

    .age-card {
      min-width: 250px;
      padding: 1.5rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .hero-stats {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-stats {
      grid-template-columns: 1fr;
    }

    .age-card {
      min-width: 220px;
      padding: 1rem;
    }
  }
`;

export default GlobalStyles;
