I consider myself quite late. Being in the second year of my career and my first ever unit test was a few days ago. Lately, I joined the backend team and they have a test coverage policy. Because of this policy, every developer working on a certain task have to do the unit tests to cover his/her task. I have always liked the idea of having tests acting as a friend that increases your confidence in your work and help you identify bugs 🐞 quickly making your work easier and better. Anyway, my first task in the backend team was to expose a simple GET URL. We are using spring as a development framework, Mockito as the mocking framework and JUnit for testing.

In this post, I would like to share with you my first ever test.

**What is unit testing? 🤔**

According to Wikipedia, It is “a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use”

In order to unit test your application, you have to follow the design principle of having small unit modules that you can test. If you are going to test a small component of your application. it needs to be isolated from all other components. That's where Mockito comes in. That’s where you will have to mock and abstract any external dependencies.

The way I see it is that unit testing follows the divide and conquer methodology :

1. Isolate your code by mocking external dependencies
2. Think about every possible scenario
3. Write your tests for this particular unit covering every scenario
4. Do this until every unit in your application is tested

**My super simple yet super awesome task.** 😎

Being my first task ever in spring. I choose the simplest one I could get. The code below is a controller that retrieves a resource from the service layer and based on the response, The controller would respond with a 200 or a 404 response code.

```
@RequestMapping(method = RequestMethod.GET)
public ResponseEntity<List<Resource>> getAllResource() {
    List<Resource> resourceList = resourceService.getAllResource();

    if (resourceList.size() > 0) {
        return new ResponseEntity<List<Resource>>(resourceList, null, HttpStatus.OK);
    }

    return new ResponseEntity<List<Resource>>(null, null, HttpStatus.NOT_FOUND);
}
```

Very simple, Isn't it? If you think about it, All the logic in the code above boils down to an IF condition. And that's exactly what we are gonna test.

**Let's write tests for that awesome task. 😎**

Okay, let's follow the above steps :

1. **Isolate:** In that case, we need to isolate the controller by mocking the call to the service layer. This way we divide the cycle into units and then test every unit independently. In this post, I am only testing the controller unit.
2. **Cover every scenario:** In that case we have 2, Either we have something to return or we don’t. If the list of the resource returned by the mocked service layer is not empty then the output should be a 200. If not then the output should be a 404.
3. **Writing the tests covering each scenario:**

- Either the service layer returned a non-empty list, The controller then would return a 200 status code

```

@Test
public void testGetAllResourceSuccess() {
    List<Resource> resourceList = new ArrayList<Resource>();
    resourceList.add(new Resource());

    // Here we mock the service layer function and set the response to a non-empty list.
    Mockito.when(resourceServiceImpl.getAllResource()).thenReturn(resourceList);
    try {

        // Then we expect the response to be a 200
        mockMvc.perform(get(“/resource")).andExpect(status().isOk());

    } catch (Exception e) {}
}

```

- Or the service layer returned an empty list, The controller then would return a 404 status code

```

@Test
public void testGetAllResourceFail() {
    List<Resource> resourceList = new ArrayList<Resource>();

    // Here we mock the service layer function and set the response to an empty list.
    Mockito.when(resourceServiceImpl.getAllResource()).thenReturn(resourceList);
    try {

        // Then we expect the response to be a 404
        mockMvc.perform(get("/resource")).andExpect(status().isNotFound());

    } catch (Exception e) {}
}

```

Looks easy, simple and straightforward, Isn't it? Well, that’s how unit tests are.

At first, I felt like that can't be it. I felt that this was too simple, that I will never actually fail. Then after some researching, everything made sense. You don’t actually have to test the whole cycle in one test case. In every test case, you cover a small unit. Doing this everywhere means that every bit on its own is working correctly. That's why it's really important to cover every unit in your project.

**Happy coding 🔥🔥**
