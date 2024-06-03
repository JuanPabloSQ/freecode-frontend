import NavBar from "../components/NavBar"
import DrumMachine from "../drum machine/DrumMachine";
import { Container } from '@mui/material';

const DrumMachinePage = () => {
    return (
        <div>
            <NavBar/>
            <Container maxWidth="md" sx={{ mt: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(80vh - 64px)' }}>
                <DrumMachine/>
            </Container>
        </div>
    )
};

export default DrumMachinePage;