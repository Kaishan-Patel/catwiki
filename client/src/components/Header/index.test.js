import { act, render, screen, waitFor } from '@testing-library/react';
import Header from '.';

test('renders header', () => {
  render(<Header />);
});

test('display loading image', () => {
    render(<Header />);
    const headerImage = screen.getByRole('img');
    expect(headerImage).toHaveAttribute('src', 'logo.svg');
    expect(headerImage).toHaveAttribute('alt', 'logo');
})

test('api to be called once', async () => {
    const fakeResponse = { id : 1, url: 'https://cdn2.thecatapi.com/images/2ik.jpg' }
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<Header/>);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async ()=>{
        await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1))
    })
})


test('displays cat image after loading image', async () => {
    const fakeResponse = { id : 1, url: 'https://cdn2.thecatapi.com/images/2ik.jpg' }
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<Header/>);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async ()=>{
        await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1))
    })
    const headerImage = screen.getByRole('img');
    expect(headerImage).toHaveAttribute('src', 'https://cdn2.thecatapi.com/images/2ik.jpg');
    expect(headerImage).toHaveAttribute('alt', 'cat');
})