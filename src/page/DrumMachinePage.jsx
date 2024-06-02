import NavBar from "../components/NavBar"
import DrumMachine from "../drum machine/DrumMachine";
import { Container } from '@mui/material';

const DrumMachinePage = () => {
    return (
        <div>
            <NavBar/>
            <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <DrumMachine/>
            </Container>
        </div>
    )
};

export default DrumMachinePage;