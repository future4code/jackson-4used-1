import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';

const All = styled.div`
 background-color: #FFFCEF;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 8px 24px;
 margin: 0 auto 1.6em auto;
 border-bottom: 1px solid #EEE9E9;
 max-width: 1024px;
`

export default class CategoryBar extends React.Component {

    render() {

        return (
            <All>
                <ButtonGroup variant="text" color="primary">
                    <Button
                        onClick={this.props.filterInstruments}
                    >
                        Instrumentos
                    </Button>
                    <Button
                        onClick={this.props.filterMedia}
                    >
                        Mídia
                    </Button>
                    <Button
                        onClick={this.props.filterCollectible}
                    >
                        Colecionáveis
                    </Button>
                    <Button
                        onClick={this.props.filterAudio}
                    >
                        Equipamento de Áudio
                    </Button>
                    <Button
                        onClick={this.props.filterSoundSystem}
                    >
                        Sistema de Som
                    </Button>
                </ButtonGroup>
            </All>
        )    
    }
}