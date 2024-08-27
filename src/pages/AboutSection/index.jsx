// AboutSection.js
import styled from 'styled-components';
import { motion } from 'framer-motion';
import headshot from '../../assets/chri-headshot.jpg';


const AboutContainer = styled.div`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 287px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #666;
`;

const AboutSection = () => {
  return (
    <AboutContainer className='container'>
      <Card whileHover={{ scale: 1.05 }}>
        <CardImage src="https://picsum.photos/id/1/200/200" alt="Mission" />
        <CardTitle>Mission/Vision</CardTitle>
        <CardDescription>
        I start by documenting your goals and then compare them to your
                current portfolio. I use proven investment strategies designed
                to meet your risk tolerance and stand up against market
                volatility. And you can count on unbiased recommendations and
                impartial guidance based directly on your needs and goals.
        </CardDescription>
      </Card>
      <Card whileHover={{ scale: 1.05 }}>
        <CardImage src={headshot} alt="About Me" />
        <CardTitle>About Me</CardTitle>
        <CardDescription>
        Since 1999, I&apos;ve been helping businesses and individuals
                safeguard their assets and plan for the retirement they want.
                When I&apos;m not working, I enjoy sailing, cooking, and playing
                with my 2 dogs.
        </CardDescription>
      </Card>
      <Card whileHover={{ scale: 1.05 }}>
        <CardImage src="https://picsum.photos/id/1/200/200" alt="Who We Serve" />
        <CardTitle>Who We Serve</CardTitle>
        <CardDescription>
        I&apos;m passionate about helping both companies and individuals with
                diversifying portfolios, managing assets, analyzing market
                trends, and reducing financial risk. <strong>My goal?</strong> To safeguard the
                dreams you strived to achieve and the assets you have worked so
                hard to accumulate. I use proven investment strategies designed
                to meet your risk tolerance and hedge against market volatility.
        </CardDescription>
      </Card>
    </AboutContainer>
  );
};

export default AboutSection;
