import { fetchBlogPosts } from './fetch-blog-posts';
import { rawDataFixtures } from './test';
import { Settings } from './data.models';

describe('fetchBlogPosts', () => {
  let fetchSpy: jest.SpyInstance<Promise<unknown>>;
  const settingsMock: Settings = { apiUrl: 'https://test.dev/api/v1/data', pageSize: 5, pageIndex: 29 };

  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: jest.fn().mockReturnValue(rawDataFixtures)
  });

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch');
  });

  afterEach(() => jest.clearAllMocks());

  it('should pass a valid request URL to the fetch middleware', () => {
    fetchBlogPosts(settingsMock);

    expect(fetchSpy)
      .toHaveBeenCalledWith('https://test.dev/api/v1/data?per_page=5&page=30&_embed=True');

    fetchSpy.mockClear();
    
    fetchBlogPosts({ apiUrl: 'https://test.dev/rest/v2/entries', pageSize: 11, pageIndex: 6 });

    expect(fetchSpy)
      .toHaveBeenCalledWith('https://test.dev/rest/v2/entries?per_page=11&page=7&_embed=True');
  });

  it('should return a valid raw blog posts recordset if the API responds successfully', async () => {
    const apiResponse = await fetchBlogPosts(settingsMock);

    expect(apiResponse)
      .toEqual(rawDataFixtures);
  });

  it('should reject the returning promise if the Fetch middleware throws an exception', async () => {
    fetchSpy.mockRejectedValue(new Error('test error'));

    await expect(fetchBlogPosts(settingsMock)).rejects.toThrow('test error');
  });

  it('should reject the returning promise if the response is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    await expect(fetchBlogPosts(settingsMock)).rejects.toThrow('Invalid Response');
  });

  it('should reject the returning promise if the response HTTP status is below 200', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 190,
      ok: true,
    });

    await expect(fetchBlogPosts(settingsMock)).rejects.toThrow('Http Error 190');
  });

  it('should reject the returning promise if the response HTTP status is equals or above 300', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 300,
      ok: true,
    });

    await expect(fetchBlogPosts(settingsMock)).rejects.toThrow('Http Error 300');

    global.fetch = jest.fn().mockResolvedValue({
      status: 404,
      ok: true,
    });

    await expect(fetchBlogPosts(settingsMock)).rejects.toThrow('Http Error 404');

    global.fetch = jest.fn().mockResolvedValue({
      status: 500,
      ok: true,
    });

    await expect(fetchBlogPosts(settingsMock)).rejects.toThrow('Http Error 500');
  });
});
