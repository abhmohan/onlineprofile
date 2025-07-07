import classes from './profile.module.css';
import Avatar from '../../components/Avatar/Avatar';
import ListItem from '../../components/ListItem/ListItem';
import Technologies from '../../components/Technologies/Technologies';

const Profile = () => {
    return (
        <div className={classes.root}>
            <div className={classes.aside}>
                <Avatar />

                <div className={classes.container}>
                    <h3 className={classes.darkTextColor}>SKILLS</h3>
                    <ul className={classes.list}>
                        <ListItem isDark>JavaScript</ListItem>
                        <ListItem isDark>ReactJS</ListItem>
                        <ListItem isDark>NextJS</ListItem>
                        <ListItem isDark>NodeJS</ListItem>
                        <ListItem isDark>ExpressJS</ListItem>
                        <ListItem isDark>TypeScript</ListItem>
                        <ListItem isDark>HTML5</ListItem>
                        <ListItem isDark>CSS3</ListItem>
                        <ListItem isDark>Git</ListItem>
                        <ListItem isDark>Mobx</ListItem>
                        <ListItem isDark>Playwright</ListItem>
                        <ListItem isDark>Storybook</ListItem>
                    </ul>
                </div>

                <div className={classes.container}>
                    <h3 className={classes.darkTextColor}>CONTACT ME</h3>
                    <ul className={classes.list}>
                        <ListItem isDark>abhijitmohanty92@outlook.com</ListItem>
                        <ListItem isDark>+91 9880666110</ListItem>
                    </ul>
                </div>


            </div>
            <div className={classes.main}>
                <h1 className={classes.textColor}>ABHIJIT MOHANTY</h1>
                <h5 className={`${classes.textColor} ${classes.borderBottom} ${classes.profileHeading}`}>WEB DEVELOPER AND ENGINEERING MANAGER</h5>
                <h3 className={classes.title}>PROFESSIONAL EXPERIENCE</h3>
                <div className={classes.experience}>
                    <h3 className={classes.companyName}>Reltio India Pvt. Ltd.</h3>
                    <h4 className={classes.companyTitle}>Engineering Manager (May 2025 - Present)</h4>
                    <Technologies technologies={['ReactJS', 'Javascript', 'NodeJS', 'Express', 'Redux', 'HTML5', 'SASS', 'CSS3', 'Typescript', 'NextJS', 'Mobx', 'Playwright', 'Storybook']} />
                    <ul className={classes.list}>
                        <ListItem>Overseeing an engineering team of 4</ListItem>
                        <ListItem>Talking to product management team to aListItemgn engineering efforts with the overall business goals</ListItem>
                        <ListItem>Providing overall status of the projects to leadership and other stakeholders</ListItem>
                        <ListItem>Defining project scope, allocating resources</ListItem>
                        <ListItem>Provide technical expertise</ListItem>
                        <ListItem>Reviewing code</ListItem>
                        <ListItem>Conducting interviews</ListItem>
                        <ListItem>Ensuring projects meet the quality</ListItem>
                        <ListItem>Providing monthly feedback to the engineers</ListItem>
                    </ul>

                    <h4 className={classes.companyName}>Software/Senior Software Developer (June 2018 – May 2025)</h4>
                    <ul className={classes.list}>
                        <ListItem>Implemented visual elements and their behavior with the user interactions</ListItem>
                        <ListItem>Architecture different appListItemcations/components</ListItem>
                        <ListItem>Designed high level implementation of different appListItemcations/components</ListItem>
                        <ListItem>Ensured technical feasibiListItemty of the features working with the Product owner</ListItem>
                        <ListItem>Created highly scalable solutions and own the entire development cycle – from architecture, design, testing, implementation and maintenance</ListItem>
                        <ListItem>Wrote integration and unit tests</ListItem>
                        <ListItem>Optimized code for speed and reusabiListItemty</ListItem>
                        <ListItem>Participated in code review</ListItem>
                        <ListItem>Worked on increasing the performance of various appListItemcations</ListItem>
                        <ListItem>Contributed to the reusable component ListItembrary</ListItem>
                        <ListItem>Increased the test coverage of different appListItemcations</ListItem>
                        <ListItem>Demo the features developed to various teams</ListItem>
                        <ListItem>Worked with different cross-functional teams to resolve issues</ListItem>
                        <ListItem>Set up different development environment setup</ListItem>
                        <ListItem>Worked on AWS S3 to store icons uploaded by users</ListItem>
                        <ListItem>Mentored new joiners</ListItem>
                    </ul>

                    <h3 className={classes.companyName}>Source edge (January 10, 2018 - May 30, 2018)</h3>
                    <h4 className={classes.companyTitle}>Front end developer</h4>
                    <Technologies technologies={['ReactJS', 'Javascript', 'CSS3', 'Redux', 'Express', 'HTML5', 'GraphQL']} />
                    <ul className={classes.list}>
                        <ListItem>Involved in continuous development and running changes for health club organisation</ListItem>
                        <ListItem>Integrated reusable component in the application</ListItem>
                        <ListItem>Providing overall status of the projects to leadership and other stakeholders</ListItem>
                        <ListItem>Developed enrollment feature for membersDefining project scope, allocating resources</ListItem>
                        <ListItem>Implemented check-in functionality for membersProvide technical expertise</ListItem>
                    </ul>

                    <h3 className={classes.companyName}>Ness Technologies (May 2, 2017 - November 6, 2017)</h3>
                    <h4 className={classes.companyTitle}>Front end developer</h4>
                    <Technologies technologies={['React', 'Redux', 'NodeJS', 'Express', 'HTML5', 'CSS3']} />
                    <ul className={classes.list}>
                        <ListItem>Involved in continuous development and running changes for an e-Commerce web site</ListItem>
                        <ListItem>Mentoring other team members on technologies like React JS, Redux</ListItem>
                    </ul>

                    <h3 className={classes.companyName}>VA Tech Ventures (10 November, 2015 - 29 April, 2017)</h3>
                    <h4 className={classes.companyTitle}>Front end developer</h4>
                    <Technologies technologies={['ReactJS', 'Javascript', 'Jquery', 'HTML5', 'CSS3', 'webpack', 'bootstrap', 'flux']} />
                    <ul className={classes.list}>
                        <ListItem>Built a generic Policy Engine to configure complex policies for different corporate clients</ListItem>
                        <ListItem>Developed a feature for bank transfer facilities such as NEFT, IMPS</ListItem>
                        <ListItem>Developed transaction system for employees to add, update, delete transactions</ListItem>
                        <ListItem>Developed reporting system for both employee and admin dashboard</ListItem>
                        <ListItem>Developed expression creation feature which enabled clients to create different questions to be run on different logical units</ListItem>
                        <ListItem>Developed the category management system</ListItem>
                    </ul>

                    <h3 className={classes.companyName}>Capgemini India (June 20, 2013 - November 9, 2015)</h3>
                    <h4 className={classes.companyTitle}>Consultant</h4>
                    <Technologies technologies={['Jquery', 'Javascript', 'CSS3','HTML5']} />
                    <ul className={classes.list}>
                        <ListItem>Developed HRO process for various clients</ListItem>
                        <ListItem>Developed customized reports</ListItem>
                        <ListItem>Developed web pages with the help of eNate</ListItem>
                        <ListItem>Managed the overall development activities</ListItem>
                        <ListItem>Analyzed and checked the feasibility of the requirements</ListItem>
                        <ListItem>Managed relationship with programmers and bridged the communication between end users and development team</ListItem>
                        <ListItem>Handled various activities of the project like information gathering, analyzing the information gathered and come up with a solution</ListItem>
                        <ListItem>Involved in clarifying issues with the developers during efforts to validate design and functional specifications</ListItem>
                        <ListItem>Involved in documenting the business processes and unit testing for the development</ListItem>
                    </ul>
                </div>

                <h3 className={classes.companyName}>Education</h3>
                <table className={classes.table}>
                    <thead>
                        <tr className={classes.th}>
                            <th>Degree</th>
                            <th>Specialization</th>
                            <th>College</th>
                            <th>University/Board</th>
                            <th>Percentage</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>B.Tech</td>
                            <td>ECE</td>
                            <td>Silicon Institute of Technology, Bhubaneswar</td>
                            <td>BPUT</td>
                            <td>8.01 CGPA</td>
                            <td>2013</td>
                        </tr>
                        <tr>
                            <td>12th</td>
                            <td>Science</td>
                            <td>Kendriya Vidyalaya No 1, Ganeshkhind, Pune</td>
                            <td>CBSE</td>
                            <td>77.8%</td>
                            <td>2009</td>
                        </tr>
                        <tr>
                            <td>10th</td>
                            <td>Science</td>
                            <td>Kendriya Vidyalaya No 1, Ganeshkhind, Pune</td>
                            <td>CBSE</td>
                            <td>89.2%</td>
                            <td>2007</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Profile;