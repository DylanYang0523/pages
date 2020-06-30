import fileResume from 'my-files/resume.pdf';
import imgGithub from 'my-images/github.png';
import imgLinkedin from 'my-images/linkedin.png';
import imgFacebook from 'my-images/facebook.png';

const data = {
    resume: {
        src: fileResume
    },
    contact: {
        gmail: {
            src: 'dylanyang0523@gmail.com',
            icon: '',
        },
        social: {
            facebook: {
                src: 'https://www.facebook.com/people/Yang-Dylan/100000241554454',
                icon: imgFacebook,
            },
            linkedin: {
                src: 'https://www.linkedin.com/in/dylan-yang-0b5536105/',
                icon: imgLinkedin,
            },
            github: {
                src: 'https://github.com/DylanYang0523',
                icon: imgGithub,
            }
        }
    }
}

export default data;