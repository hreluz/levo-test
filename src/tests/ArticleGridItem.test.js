import { shallow } from 'enzyme'
import ArticleGridItem from '../components/ArticleGridItem'

describe('Test in ArticleGridItem', () => {

    const title = 'A title';
    const paragraph = 'This is a paragraph to show for the test';
    const date = '24 December 2019';
    const wrapper = shallow(<ArticleGridItem
                                paragraph={paragraph}
                                date={date}
                                title={title}/>)

    test('it should show <ArticleGridItem/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('it should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );
    });

    test('it should have the date in the first small element', () => {
        const small = wrapper.find('small').at(0);
        expect(small.prop('children')).toBe(date);
    });

    test('it should have the paragraph in the second small element', () => {
        const small = wrapper.find('small').at(1);
        expect(small.prop('children')).toBe(paragraph);
    });
});