import { FlatList } from 'react-native';
import { Container, Content, Header, Title, Category, Icon, Name, Separator, Button, ButtonTitle } from './styles';
import { categories } from '../../utils/categories';

interface Category {
    key: string;
    name: string;
}

interface Props {
    setCategory: (item: Category) => void;
    close: () => void;
}

export function SelectModal({
    setCategory,
    close
}: Props ){

    function handleCategorySelect(item: Category){
        setCategory(item)
        close();
    }

    return (
        <Container>
            <Header>
                <Title>Selecione a categoria</Title>
            </Header>

            <Content>
                <FlatList 
                    data={categories}
                    style={{flex: 1, width: '100%'}}
                    keyExtractor={(item) => item.key}
                    renderItem={({item }) => 
                        <Category 
                            onPress={() => handleCategorySelect(item)}
                        >
                            <Icon name={item.icon} />
                            <Name>{item.name}</Name>
                        </Category>
                    }
                    ItemSeparatorComponent={() => <Separator />}
                />
          
            </Content>
        </Container>
    )
}

