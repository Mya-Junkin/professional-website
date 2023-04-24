import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    App: {
        backgroundColor: '#2A2F35',
    },

    landingGrid: {
        width: '100vw',
        alignItems: 'center',
    },

    landingIll: {
        maxWidth: '25vw',
    },

    buttonGroup: {
        color: '#F4B301',
    }
}))

export default useStyles;