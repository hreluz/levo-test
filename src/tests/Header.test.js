import { shallow } from 'enzyme'
import Header from '../components/Header'

describe('Test in Header', () => {

    const title = 'A title';
    const paragraph = 'This is a paragraph to show for the test';

    const wrapper = shallow(<Header
                                paragraph={paragraph}
                                title={title}/>)

    test('it should show <Header/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('it should have a title in h1', () => {
        const h1 = wrapper.find('h1');
        expect(h1.text().trim()).toBe( title );
    });

    test('it should have a paragraph in p', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( paragraph );
    });
});