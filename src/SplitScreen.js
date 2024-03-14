import styled from "styled-components";
export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1
}) => {   
     const [left, right] = [...children]
    const Container = styled.div`
      display:flex;      
    `;    
    const Pane = styled.div`flex: ${props=> props.weight}`
    return (
        <div>
            <Container>
                <Pane weight={leftWeight}>
                     {left}
                </Pane>
                <Pane weight={rightWeight}>
                   {right}
                </Pane>
            </Container>
        </div>
    )
}