import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { tokens } from 'components/ThemeProvider/theme';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import styles from './Contact.module.css';

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <div className="text-center">
        <Meta
          title="Contact"
          description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
        />
        <Heading level={3} as="h2" className={`text-white`} id="contacttitle">
          Say hello
        </Heading>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <p>
          Send me a message if you’re interested in discussing a project or if you just
          want to say hi
        </p>
        <br />
        <br />
        <h2 className="flex">
          <HiOutlineMail />
          samtaniaashish30@gmail.com
        </h2>
        <h2>
          <AiOutlinePhone />
          +62 81998492866
        </h2>
        <h2>+44 7778083464</h2>
      </div>
      <Footer className={styles.footer} />
    </Section>
  );
};
