<?php

namespace RSSReaderBundle\Controller;

use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Post;

use RSSReaderBundle\Entity\RSSGroup;

/**
 * @RouteResource("Group")
 */
class GroupRestController extends FOSRestController
{
    public function cgetAction(Request $request) 
    {
        $repo = $this->getDoctrine()->getRepository('RSSReaderBundle:RSSGroup');
        $groups = $repo->findBy(array(), array('title'=>'asc'));

        $view = View::create();
        $handler = $this->get('fos_rest.view_handler');

        $view->setData($groups);

        return $handler->createResponse($view, $request, 'json');
    }
    
    public function getAction(RSSGroup $group) 
    {
        return $group;
    }

    public function postAction(Request $request) 
    {
        $title = $request->request->get('title');
        $handler = $this->get('fos_rest.view_handler');
        
        if (!$title) {
            return $handler->createResponse(View::create(null, 400), $request, 'json');
        }

        $group = new RSSGroup;
        $group->setTitle($title);
        $em = $this->getDoctrine()->getManager();
        $em->persist($group);
        $em->flush();
       
        return $handler->createResponse(View::create($title, 200), $request, 'json');
    }
    
    public function deleteAction(RSSGroup $group) 
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($group);
        $em->flush();
    }

    public function putAction(RSSGroup $group, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $group->setTitle($request->request->get('title'));
        $em->persist($group);
        $em->flush();
    }
}
