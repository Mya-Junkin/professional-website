import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    App: {
        backgroundColor: '#2A2F35', //main primary
    },

    landingGrid: {
        width: '98vw',
        height: '100vh',
    },

    landingGridItem: {
        display: 'flex',
    },

    buttonGroup: {
        color: 'green',
        position: 'sticky',
        top: '0',
    },

    SkillsPaper: {
        backgroundColor: '#F4B301',
        padding: '5vh',
        marginTop: '10vh',
        marginBottom: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        boxShadow: '0px 10px #F5A302'
    },

    SkillsGrid: {
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
    },

    SkillsCat: {
        padding: '2vh',
        alignItems: 'center',
        justifyItems: 'center'
    },

    ProjectCard: {
        backgroundColor: '#3B4046',
        width: '75vw',
        margin: '5vh',
        padding: '5vh',
        color: '#C9C5C0'
    },

    ProjectVideo: {
        aspectRatio: '16/9',
        width: '100%',
    },

    AboutPaper: {
        backgroundColor: '#F4B301',
        padding: '5vh',
        marginTop: '10vh',
        marginBottom: '10vh',
        boxShadow: '0px 10px #F5A302'
    },

    ContactCard: {
        minWidth: '50vw',
        padding: '5vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#3B4046',
        boxShadow: "5px 10px #1E2329"

    },

    ContactFeild: {
        backgroundColor: '#F0F0F0',
        margin: '1vh'
    }


}))

export default useStyles;